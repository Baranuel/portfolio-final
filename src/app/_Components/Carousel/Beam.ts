
export class Beam {
    width: number;
    height: number;
    distance: number;
    opacity: number;
    constructor(width: number = 4, height: number = 275, distance: number = 40, opacity: number = 1) {
      this.width = width;
      this.height = height;
      this.distance = distance;
      this.opacity = 1;
    }
  
    createGradient(ctx: CanvasRenderingContext2D, centerX: number) {
      const gradient = ctx.createLinearGradient(
        centerX - this.width/2,
        0,
        centerX + this.distance,
        0
      );
      gradient.addColorStop(0, 'rgba(252, 211, 77, 1)');
      gradient.addColorStop(0.1, 'rgba(252, 211, 77, 0.7)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.6, 'rgba(252, 211, 77, 0.7)');
      return gradient;
    }
  
    update(distance: number, height: number) {
      this.distance = distance;
      this.height = height;
    }
  
    draw(ctx: CanvasRenderingContext2D, centerX: number, startY: number, opacity: number) {
      const gradient = this.createGradient(ctx, centerX)
      ctx.fillStyle = gradient;
      ctx.globalAlpha = opacity;
      ctx.fillRect(centerX - this.width/2 - 5, startY, this.width + this.distance, this.height);
    }
}