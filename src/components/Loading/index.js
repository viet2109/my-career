import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import styles from "./Loading.module.scss";
Loading.propTypes = {};

const cx = classNames.bind(styles);
function Loading(props) {
  const isFetching = useSelector(state => state.auth.isFetching)
  console.log(isFetching);
  return (
    <div className={cx("loading-wrapper" , {none: !isFetching})}>
      <div className={cx("loading")}>
        <svg className={cx("pl")} viewBox="0 0 128 128" width="128px" height="128px">
          <defs>
            <linearGradient id="pl-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            <mask id="pl-mask">
              <rect x="0" y="0" width="128" height="128" fill="url(#pl-grad)" />
            </mask>
          </defs>
          <g strokeLinecap="round" strokeWidth="8" strokeDasharray="32 32">
            <g stroke="hsl(193,90%,50%)">
              <line className={cx("pl__line1")} x1="4" y1="48" x2="4" y2="80" />
              <line className={cx("pl__line2")} x1="19" y1="48" x2="19" y2="80" />
              <line className={cx("pl__line3")} x1="34" y1="48" x2="34" y2="80" />
              <line className={cx("pl__line4")} x1="49" y1="48" x2="49" y2="80" />
              <line className={cx("pl__line5")} x1="64" y1="48" x2="64" y2="80" />
              <g transform="rotate(180,79,64)">
                <line className={cx("pl__line6")} x1="79" y1="48" x2="79" y2="80" />
              </g>
              <g transform="rotate(180,94,64)">
                <line className={cx("pl__line7")} x1="94" y1="48" x2="94" y2="80" />
              </g>
              <g transform="rotate(180,109,64)">
                <line className={cx("pl__line8")} x1="109" y1="48" x2="109" y2="80" />
              </g>
              <g transform="rotate(180,124,64)">
                <line className={cx("pl__line9")} x1="124" y1="48" x2="124" y2="80" />
              </g>
            </g>
            <g stroke="hsl(283,90%,50%)" mask="url(#pl-mask)">
              <line className={cx("pl__line1")} x1="4" y1="48" x2="4" y2="80" />
              <line className={cx("pl__line2")} x1="19" y1="48" x2="19" y2="80" />
              <line className={cx("pl__line3")} x1="34" y1="48" x2="34" y2="80" />
              <line className={cx("pl__line4")} x1="49" y1="48" x2="49" y2="80" />
              <line className={cx("pl__line5")} x1="64" y1="48" x2="64" y2="80" />
              <g transform="rotate(180,79,64)">
                <line className={cx("pl__line6")} x1="79" y1="48" x2="79" y2="80" />
              </g>
              <g transform="rotate(180,94,64)">
                <line className={cx("pl__line7")} x1="94" y1="48" x2="94" y2="80" />
              </g>
              <g transform="rotate(180,109,64)">
                <line className={cx("pl__line8")} x1="109" y1="48" x2="109" y2="80" />
              </g>
              <g transform="rotate(180,124,64)">
                <line className={cx("pl__line9")} x1="124" y1="48" x2="124" y2="80" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
