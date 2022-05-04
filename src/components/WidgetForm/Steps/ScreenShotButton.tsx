import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../../Loading";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";

interface ScreenShotButtonProps {
  onScreenshot: (screenshot: string | null) => void;
  previewScreenshot: string | null;
}

export function ScreenShotButton({
  onScreenshot,
  previewScreenshot,
}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenShot = async () => {
    setIsTakingScreenshot(true);
    const screenshot = await html2canvas(document.querySelector("html")!); // ! to assure it's not null
    // transform the screenshot to a base64 string
    const base64 = screenshot.toDataURL("image/png");
    onScreenshot(base64);
    setIsTakingScreenshot(false);
  };

  if (previewScreenshot) {
    // return a preview of the screenshot
    return (
      <button
        type="button"
        onClick={() => onScreenshot(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${previewScreenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      onClick={handleTakeScreenShot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 ocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-4 h-4" />}
    </button>
  );
}
