
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
      gradient.addColorStop(0, 'rgba(253, 230, 138, 1)');
      gradient.addColorStop(0.5, 'rgba(253, 230, 138, 0.3)');
      gradient.addColorStop(0.8, 'rgba(253, 230, 138, 0.1)');
      gradient.addColorStop(0.9, 'rgba(253, 230, 138, 0.0)');
      gradient.addColorStop(1, 'rgba(253, 230, 138, 0)');
      return gradient;
    }
  
    update(distance: number, height: number) {
      this.distance = distance;
      this.height = height;
    }
  
    draw(ctx: CanvasRenderingContext2D, centerX: number, startY: number, ) {
      const gradient = this.createGradient(ctx, centerX)
      ctx.fillStyle = gradient;
      ctx.globalAlpha = this.opacity;
      ctx.fillRect(centerX - this.width/2, startY, this.width + this.distance, this.height);
    }
}