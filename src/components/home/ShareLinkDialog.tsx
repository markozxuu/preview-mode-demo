import { Dialog } from "@reach/dialog";
import styles from "./ShareLinkDialog.module.css";

export function ShareLinkDialog({
  snapshotId,
  onExit
}: {
  snapshotId: string;
  onExit: () => void;
}) {
  return (
    <Dialog isOpen onDismiss={onExit} className={styles.dialog}>
      <div className="p">
        You can now share your edits with anyone:
        <br />
        <pre>{`${window.origin}/s/${encodeURI(snapshotId)}`}</pre>
      </div>
      <div className="p">
        What happened?
        <ul>
          <li>
            The page you first loaded is fully static and built with{" "}
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/zeit/next.js/issues/9524"
            >
              Next.js SSG
            </a>
            .
          </li>
          <li>
            Additionally, Next.js gave us the ability to generate <em>new</em>{" "}
            versions of that page at runtime, which we used to generate
            previews.
          </li>
        </ul>
      </div>
      <div data-cta>
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/zeit/next.js/issues/9524"
        >
          Learn More
        </a>
        <button onClick={onExit}>Dismiss</button>
      </div>
    </Dialog>
  );
}
