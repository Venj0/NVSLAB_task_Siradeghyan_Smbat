const animationTime = .5
export const animation = (args: string[], delay = animationTime, type = 'ease-in'): string => {
  return `
    -webkit-transition: ${args.map(arg => `${arg} ${delay}s ${type}`)};
    -moz-transition: ${args.map(arg => `${arg} ${delay}s ${type}`)};
    -o-transition: ${args.map(arg => `${arg} ${delay}s ${type}`)};
    transition: ${args.map(arg => `${arg} ${delay}s ${type}`)};
  `
}
export const animations = {
  all  : animation(["all"]),
  color: animation(["color", "background-color"]),
  left : animation(["left"]),

}
