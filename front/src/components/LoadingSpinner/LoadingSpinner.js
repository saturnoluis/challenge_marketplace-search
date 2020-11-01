import './LoadingSpinner.css';

export default function LoadingSpinner({ loading }) {
  return (
    <div className="loadingSpinner">
      {loading ? <div className="loadingSpinner__bar" /> : null}
    </div>
  );
}