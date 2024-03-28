import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useRef } from "react";
import styles from "./InputField.module.scss";

InputField.propTypes = {};

const cx = classNames.bind(styles);

function InputField(props) {
  const { type, label, field, children,id, className, list } = props;

  const { name } = field;
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const handleShowHidePass = (e) => {
    e.currentTarget.classList.toggle(`${cx("active")}`);
    inputRef.current.type = e.currentTarget.classList.contains(
      `${cx("active")}`
    )
      ? "text"
      : "password";
  };

  const handleOnFocus = (e) => {
    if (labelRef.current === null) return;
    if (e.target.value === "") {
      labelRef.current.style.top = "0";
      labelRef.current.style.zIndex = "0";
      labelRef.current.style.fontSize = "12px";
      labelRef.current.style.color = "var(--blue)";
    }
    if (name.toLowerCase().includes("dob")) {
      labelRef.current.style.width = "fit-content";
      labelRef.current.style.left = "18px";
      labelRef.current.style.paddingLeft = "6px";

      inputRef.current.focus();
    }
  };

  const handleOnBlur = (e) => {
    if (labelRef.current === null) return;
    if (e.target.value === "") {
      labelRef.current.style.top = "50%";
      labelRef.current.style.zIndex = "-1";
      labelRef.current.style.fontSize = "16px";
      if (name.toLowerCase().includes("dob")) {
        labelRef.current.style.zIndex = "0";
        labelRef.current.style.width = "130px";
        labelRef.current.style.left = "14px";
        labelRef.current.style.paddingLeft = "10px";
      }
    }

    labelRef.current.style.color = "var(--black)";
  };
  return (
    <div className={cx("input-wrapper")}>
      <div className={cx("input-relative")}>
        <input
          id={id}
          className={cx("input", className, {
            error: children,
          })}
          name={name}
          ref={inputRef}
          type={type}
          list={`list-${name}`}
          {...field}
          onBlur={(e) => {
            handleOnBlur(e);
          }}
          onFocus={(e) => {
            handleOnFocus(e);
          }}
        />
        {list && <datalist id={`list-${name}`}>
          {list.map((listItem, index) => (
            <option key={index} value={listItem}>{listItem}</option>
          ))}
        </datalist>}
        {label && (
          <label
            className={cx("label", { error: children, date: type === "date" })}
            ref={labelRef}
            onClick={(e) => {
              handleOnFocus(e);
            }}
          >
            {label}
          </label>
        )}

        {name.toLowerCase().includes("password") && (
          <div
            className={cx("icon-wrapper")}
            onClick={(e) => {
              handleShowHidePass(e);
            }}
          >
            <FontAwesomeIcon icon={faEye} className={cx("icon", "showIcon")} />
            <FontAwesomeIcon
              icon={faEyeSlash}
              className={cx("icon", "hideIcon")}
            />
          </div>
        )}
      </div>
      {children && <div className={cx("notice-error")}>{children}</div>}
    </div>
  );
}

export default InputField;
