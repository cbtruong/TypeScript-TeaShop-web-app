// components/blog/CommentInput.tsx
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type CommentFormInputs = {
  comment: string;
};

type CommentInputProps = {
  onSubmit: SubmitHandler<CommentFormInputs>;
  onClose?: () => void;
};

const CommentInput: React.FC<CommentInputProps> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<CommentFormInputs>();
  const [onFocusComment, setOnFocusComment] = useState(false);

  return (
    <form onSubmit={handleSubmit((data) => {
      onSubmit(data);
      reset();
    })}>
      <button
        onClick={() => setOnFocusComment(true)}
        className="w-full border border-gray border-opacity-30 p-5 hover:border-black transitionMain"
      >
        <Controller
          name="comment"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Write a comment"
              className="w-full outline-none resize-none overflow-hidden"
              rows={1}
              onInput={(
                e: React.ChangeEvent<HTMLTextAreaElement>
              ) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
          )}
        />
        <div
          className={`${
            onFocusComment ? "max-h-[300px] h-fit" : "max-h-0"
          } mt-5 flex flex-row items-center space-x-6 overflow-auto transitionMain`}
        >
          <button type="button">
            <i className="bx bx-smile text-h2 text-gray text-opacity-70"></i>
          </button>
          <button type="button">
            <i className="bx bx-camera text-h2 text-gray text-opacity-70"></i>
          </button>
        </div>
      </button>
      <div className="mt-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <img
            src="https://via.placeholder.com/150"
            alt="blog"
            className="w-7 h-7 rounded-[50%]"
          />
          <p className="text-small">
            Commenting with the name Nguyen Quoc Dung
          </p>
        </div>
        <div className="flex flex-row items-center space-x-5">
          <button type="button" onClick={() => setOnFocusComment(false)} className="text-normal font-extra">
            Cancel
          </button>
          <button
            type="submit"
            className={`text-normal font-extra px-3 py-1 text-white transitionMain
                  ${!errors?.comment
                ? "bg-lightBlack hover:bg-lightGray"
                : "bg-lightGray bg-opacity-30 cursor-not-allowed"
              }`}
            disabled={!!errors?.comment}
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentInput;
