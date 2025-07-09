export const useUploadFile = (e: Event) => {
  const previewImg = ref<string | null>(null);
  const uploadFile = ref<File | null>(null);

  const handleUploadFile = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files[0];

    if (file) {
      previewImg.value = URL.createObjectURL(file);
      uploadFile.value = file;
    }
  };

  const resetFile = () => {
    previewImg.value = null;
    uploadFile.value = null;
  };

  return {
    uploadFile,
    previewImg,
    handleUploadFile,
    resetFile,
  };
};
