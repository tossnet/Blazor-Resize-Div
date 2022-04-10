using Microsoft.JSInterop;

public sealed class InvokeHelper
{
    private Action<string> action;

    public InvokeHelper(Action<string> action)
    {
        this.action = action;
    }

    [JSInvokable("ReturnSize")]
    public void UpdateSize(string message)
    {
        action.Invoke(message);
    }
}