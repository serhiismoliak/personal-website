import { useState, useEffect, useRef } from "preact/hooks";
import { fontSize } from "../store/font-size";
import { backgroundColor } from "../store/background-color";

type ActionType = "fontIncrease" | "fontDecrease" | "changeBkg";

const CustomMenu = () => {
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

  // Change background color
  const changeBkg = () => {
    if (backgroundColor.value === "#ffffff") {
      backgroundColor.value = "#D9EAFD";
    } else {
      backgroundColor.value = "#ffffff";
    }
    hideMenu();
  };

  // Action handler
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

  // Global context menu and click event listeners
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault(); // Prevent default context menu
      showMenu(true, event.clientX, event.clientY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        showMenu(false, 0, 0); // Close menu when clicked outside
      }
    };

    document.body.addEventListener("contextmenu", handleContextMenu); // Attach context menu
    document.addEventListener("mousedown", handleClickOutside); // Close on click outside

    // Clean up listeners on unmount
    return () => {
      document.body.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          ref={menuRef}
          class="absolute bg-white text-blue-900 rounded shadow-lg z-[2147483647]"
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

export default CustomMenu;
