"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface StudioAddFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, image: string) => void;
}

const StudioAddForm = ({ isOpen, onClose, onSave }: StudioAddFormProps) => {
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setNewImage(imageUrl);
    }
  };

  const handleSaveInternal = () => {
    if (newTitle && newImage) {
      onSave(newTitle, newImage);
      setNewTitle("");
      setNewImage(null);
    }
  };

  const handleCancel = () => {
    setNewTitle("");
    setNewImage(null);
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
            className="bg-[#1a1a1a] p-8 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 tracking-wider text-white">
              ADD NEW SERVICE
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Service Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-transparent border-b border-white/20 py-2 focus:border-[#E5e548] outline-none transition-colors text-lg text-white"
                  placeholder="E.g. BRANDING"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest opacity-50 text-white">
                  Upload Image
                </label>
                <label className="cursor-pointer bg-white/5 hover:bg-white/10 border border-dashed border-white/20 p-6 rounded-lg text-center transition-all">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {newImage ? (
                    <div className="relative w-full aspect-video rounded overflow-hidden">
                      <Image
                        src={newImage}
                        fill
                        alt="Preview"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span className="opacity-40 text-white">
                      Click to upload or drag image
                    </span>
                  )}
                </label>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors uppercase text-sm tracking-widest text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveInternal}
                  disabled={!newTitle || !newImage}
                  className="flex-1 py-3 bg-[#E5e548] text-black rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-all uppercase text-sm tracking-widest disabled:opacity-50 disabled:grayscale disabled:scale-100"
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

export default StudioAddForm;
