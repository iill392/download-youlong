export default {
  async fetch(request) {
    const url = new URL(request.url);
    // 访问 /yltool.apk 就反代到 GitHub Release
    if (url.pathname === "/yltool.apk") {
      const target = "https://github.com/iill392/download-youlong/releases/download/111/yltool-V5.02.apk";
      const res = await fetch(target);
      // 强制下载、文件名正确
      return new Response(res.body, {
        headers: {
          "Content-Disposition": 'attachment; filename="yltool-V5.02.apk"',
          "Content-Type": "application/vnd.android.package-archive"
        }
      });
    }
    return new Response("Not Found", { status: 404 });
  }
};
