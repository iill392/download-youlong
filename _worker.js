export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/download") {
      return Response.redirect(
        "https://github.com/iill392/download-youlong/releases/download/111/yltool-V5.02.apk",
        302
      );
    }
    return new Response(`
      <html>
        <body style="text-align:center;margin-top:50px;">
          <a href="/download" style="font-size:20px;padding:10px 20px;background:#007bff;color:white;text-decoration:none;border-radius:5px;">立即下载</a>
        </body>
      </html>
    `, { headers: { "Content-Type": "text/html" } });
  }
};
