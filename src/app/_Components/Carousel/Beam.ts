
export class Beam {
    width: number;
    height: number;
    distance: number;
    opacity: number;
    constructor(width: number = 10, height: number = 275, distance: number = 10, opacity: number = 1) {
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

      
      gradient.addColorStop(0, 'rgb(34, 211, 238, 5)');
      gradient.addColorStop(1, 'rgb(14, 165, 233, 0)');
      return gradient;
    }
  
    update(distance: number, height: number) {
      this.distance = distance;
      this.height = height;
    }
  
    draw(ctx: CanvasRenderingContext2D, centerX: number, startY: number, opacity: number) {
      const gradient = this.createGradient(ctx, centerX);
      ctx.fillStyle = gradient;
      ctx.globalAlpha = opacity;
      ctx.fillRect(centerX - 2, startY , this.distance, this.height);
    }
}