export const handleDownload = () => {
  fetch("MyResume.pdf").then((res) => {
    res.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "MyResume.pdf";
      alink.click();
    });
  });
};
