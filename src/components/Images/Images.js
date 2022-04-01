import "./Images.css";

function Images({ url, classImage, altImage, titleImage}) {
    return <img src={url} className={classImage} alt={altImage} title={titleImage} />;
}

export default Images;