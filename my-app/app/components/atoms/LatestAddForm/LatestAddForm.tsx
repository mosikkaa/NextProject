"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface LatestAddFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    title: string;
    description: string;
    date: string;
    image: string;
  }) => void;
}

const LatestAddForm = ({ isOpen, onClose, onSave }: LatestAddFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImage(imageUrl);
    }
  };

  const handleSaveInternal = () => {
    if (title && description && date && image) {
      onSave({ title, description, date, image });
      resetForm();
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setImage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1a1a1a] p-8 rounded-2xl w-full max-w-lg border border-white/10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-xl font-bold mb-6 tracking-wider text-white uppercase">
              Add New Story
            </h2>

            <div className="flex flex-col gap-5">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Story Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-transparent border-b border-white/20 py-2 focus:border-[#E5e548] outline-none transition-colors text-white"
                  placeholder="E.g. NEW PROJECT REBRANDING"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-transparent border-b border-white/20 py-2 focus:border-[#E5e548] outline-none transition-colors text-white min-h-[80px] resize-none"
                  placeholder="Describe the story..."
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent border-b border-white/20 py-2 focus:border-[#E5e548] outline-none transition-colors text-white"
                />
              </div>

              {/* Image */}
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Upload Image
                </label>
                <label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-dashed border-white/20 p-4 rounded-lg text-center transition-all">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {image ? (
                    <div className="relative w-full aspect-video rounded overflow-hidden">
                      <Image
                        src={image}
                        fill
                        alt="Preview"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span className="opacity-40 text-white">
                      Click to upload story image
                    </span>
                  )}
                </label>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-4">
                <button
                  onClick={resetForm}
                  className="flex-1 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors uppercase text-sm tracking-widest text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveInternal}
                  disabled={!title || !description || !date || !image}
                  className="flex-1 py-3 bg-[#E5e548] text-black rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all uppercase text-sm tracking-widest disabled:opacity-50 disabled:grayscale"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LatestAddForm;
