import { useState } from "react";
import AudioPlayer from "./AudioPlayer";
import { Checkbox, Form, Image } from "antd";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import VideoModal from "../../createPage/VideoModal";

const SearchResult = ({
  name,
  audio,
  image,
  video,
  index,
  blockStates,
  handleChange,
  isChecked,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  console.log({ blockStates, index });
  const result = () => {
    const checkedOptions = ["image", "audio", "video"].filter(
      (option) => blockStates[index] && blockStates[index][option],
    );

    return checkedOptions.length > 0
      ? checkedOptions.length === 1
        ? checkedOptions[0] + " only"
        : checkedOptions.slice(0, -1).join(", ") +
          " and " +
          checkedOptions.slice(-1)
      : "no media selected";
  };
  const firstcon = blockStates[index] && blockStates[index][image];
  console.log({ firstcon });
  return (
    <div className="h-fit w-full rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 py-8">
      <h3 className="mb-3 w-full text-center text-2xl font-semibold">{name}</h3>
      <div className="flex flex-row justify-between px-12">
        <div className="flex flex-col justify-center gap-4">
          <Image
            width="4rem"
            height="4rem"
            src={image}
            fallback="../../../../assets/broken-image.jpg"
          />
          <Form.Item name="image" className="mx-auto" valuePropName="checked">
            <Checkbox
              onChange={handleChange(index, "image")}
              checked={["image", "audio", "video"].filter(
                (option) => blockStates[index] && blockStates[index][option],
              )}
            />
          </Form.Item>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <AudioPlayer audioSrc={audio} />
          <Form.Item name="audio" className="mx-auto" valuePropName="checked">
            <Checkbox
              onChange={handleChange(index, "audio")}
              value={blockStates[index] && blockStates[index][audio]}
            />
          </Form.Item>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <button
            type="button"
            title="view video"
            onClick={() => setShowVideoModal(true)}
            className="flex h-16 w-16 items-center justify-center rounded-md bg-[#ADB5BD] bg-opacity-50"
          >
            <MdOutlineSlowMotionVideo size={40} color="white" />
          </button>
          <Form.Item name="video" valuePropName="checked" className="mx-auto">
            <Checkbox
              onChange={handleChange(index, "video")}
              checked={blockStates[index] && blockStates[index][video]}
            />
          </Form.Item>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center capitalize">
        {result()}
      </div>
      <VideoModal
        isOpen={showVideoModal}
        handleClose={() => setShowVideoModal(false)}
        url={video}
      />
    </div>
  );
};

export default SearchResult;
