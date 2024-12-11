import { useState, useEffect, useRef } from "preact/hooks";
import { fontSize } from "../store/font-size";
import { backgroundColor } from "../store/background-color";

type ActionType = "fontIncrease" | "fontDecrease" | "changeBkg";

const ContextMenu = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = (show: boolean, x: number, y: number) => {
    if (show) {
      setPosition({ x, y });
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const hideMenu = () => setVisible(false);

  const increaseFont = () => {
    if (fontSize.value < 24) {
      fontSize.value += 2;
    }
    hideMenu();
  };

  const decreaseFont = () => {
    if (fontSize.value > 8) {
      fontSize.value -= 2;
    }
    hideMenu();
  };

  const changeBkg = () => {
    if (backgroundColor.value === "#ffffff") {
      backgroundColor.value = "#D9EAFD";
    } else {
      backgroundColor.value = "#ffffff";
    }
    hideMenu();
  };

  const handleAction = (action: ActionType) => {
    switch (action) {
      case "fontDecrease":
        return decreaseFont();
      case "fontIncrease":
        return increaseFont();
      case "changeBkg":
        return changeBkg();
    }
  };

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      showMenu(true, event.clientX, event.clientY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        showMenu(false, 0, 0); 
      }
    };
    const handleScroll = () => showMenu(false, 0, 0);

    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          ref={menuRef}
          class="fixed bg-white text-blue-900 rounded shadow-lg z-[2147483647]"
          style={{
            width: "250px",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {[
            { label: "Збільшити шрифт", action: "fontIncrease" },
            { label: "Зменшити шрифт", action: "fontDecrease" },
            { label: "Змінити фон", action: "changeBkg" },
          ].map((item) => (
            <div
              key={item.action}
              class="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={() => handleAction(item.action as ActionType)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ContextMenu;
