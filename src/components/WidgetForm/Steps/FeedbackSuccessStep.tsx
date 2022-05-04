import { CloseButton } from "../../CloseButton";
import successImg from "../../../assets/Success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequest,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center justify-center py-10 w-[304px]">
        <img src={successImg} alt="Success" className="w-[41px] h-[40px]" />
        <span className="text-xl mt-2"> Thank you for your feedback </span>
        <button
          type="button"
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Send another feedback
        </button>
      </div>
    </>
  );
}
