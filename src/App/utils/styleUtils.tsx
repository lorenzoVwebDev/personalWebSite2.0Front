export function changeDisplay(type: string, id: string) {
    switch (type) {
      case "block": {
        const label = document.getElementById(id)?.children[0] as unknown as HTMLElement
        if (label)
        label.style.setProperty("display", type);
        label.style.setProperty("opacity", "1");
        label.style.setProperty("visibility", "visible");
        break
      };
      case "none": {
        const label = document.getElementById(id)?.children[0] as unknown as HTMLElement
        if (label)
        label.style.setProperty("display", type);
        label.style.setProperty("opacity", "0");
        label.style.setProperty("visibility", "hidden");
        break
      }
      default:
    }
  }

  type Directions = "right" | "left" | "top" | "bottom"

export function labelComicStyle(direction: Directions, value: number): object {

    let style: object = {
                display: "none",
                opacity: 0,
                position: "absolute",
                padding: "1rem",
                visibility: "hidden",
                backgroundColor: "#444444",
                color: "white",
                borderRadius: "5px",
                transition: "transition 1s"
              }

    switch (direction) {
      case "top": {
        style = {...style, top: value}
        break
      }
      case "bottom": {
        style = {...style, bottom: value}
        break
      }
      case "right": {
        style = {...style, right: value}
        break
      }
      case "left": {
        style = {...style, left: value}
        break
      }
      default: 
    }

    return style
  }