export class StringUtils {
  public static truncateString(str: string, front: number, back: number): string {
    return `${str.substring(0, front)}...${str.substring(str.length - back, str.length)}`;
  }
}
