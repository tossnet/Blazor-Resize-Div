using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorResizeDiv;

public sealed class JsInterop : IAsyncDisposable
{
    private readonly Lazy<Task<IJSObjectReference>> moduleTask;

    public JsInterop(IJSRuntime jsRuntime)
    {
        moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
            "import", "/js/resizediv.js").AsTask());
    }


    //startMove(dotNetHelper, elementId)
    public async Task StartMove(object dotNetHelper, string elementId)
    {
        var module = await moduleTask.Value;
        await module.InvokeVoidAsync("startMove", dotNetHelper, elementId);
    }

    public async ValueTask<string> Toto()
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<string>("toto");
    }

    
    public async ValueTask<string> StopResize()
    {
        var module = await moduleTask.Value;
        return await module.InvokeAsync<string>("stopResize");
    }

    public async ValueTask DisposeAsync()
    {
        if (moduleTask.IsValueCreated)
        {
            var module = await moduleTask.Value;
            await module.DisposeAsync();
        }
    }
}
