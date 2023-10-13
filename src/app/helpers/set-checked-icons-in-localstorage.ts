
export const setCheckedIconsInLocalStorage = (icon: string) => {
    if (!localStorage.getItem("checkedIcons")) {
      localStorage.setItem("checkedIcons", JSON.stringify([]));
    }

    const checkedIcons = JSON.parse(
      localStorage.getItem("checkedIcons") || "[]"
    );

    if (!checkedIcons.includes(icon)) {
      checkedIcons.push(icon);
    } else {
      return true
    }

    localStorage.setItem("checkedIcons", JSON.stringify(checkedIcons));
    return false
  };