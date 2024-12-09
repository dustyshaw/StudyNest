// paint.js
class BoxBackgroundPainter {
  paint(ctx, size, properties) {
    const color = properties.get("--boxColor") || "hsl(55 90% 60%)";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, size.width, size.height);
  }
}

// Register the custom paint worklet
registerPaint("boxbg", BoxBackgroundPainter);
