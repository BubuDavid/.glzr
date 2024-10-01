export function GlazeButton({ runCommand, workspace }) {
  return (
    <button
      className={`workspace ${workspace.hasFocus && "focused"} ${workspace.isDisplayed && "displayed"}`}
      onClick={() => runCommand(`focus --workspace ${workspace.name}`)}
      key={workspace.name}
    >
      <i className="nf nf-dev-terminal" />
    </button>
  );
}
