// components/SkipLink.js
const SkipLink = () => {
  return <a href="#main" className="skip-link">
    <style jsx>
      {`
        .skip-link {
          position: absolute;
          top: 0;
          right: 100%; /* moves off screen */
          z-index: library.$z-skip-link;
        }

        .skip-link:focus {
          right: auto;
          background-color: #000;
          color: #fff;
          border: #fff 3px solid;
          padding: 1em;
        }
      `}
    </style>

    Skip to content
    </a>
}

export default SkipLink
