/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaUpload, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, PanelRow } from "@wordpress/components";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import defaultImage from "./../../image.png";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { heading, video1, video2, poster1, poster2 } = attributes;

	// Handle Functions
	const handleHeading = (text) => {
		setAttributes({ heading: text });
	};
	const handleVideo1 = (video) => {
		setAttributes({ video1: video.url });
	};
	const handleVideo2 = (video) => {
		setAttributes({ video2: video.url });
	};
	const handlePoster1 = img =>{
		setAttributes({ poster1: img.url})
	}
	const handlePoster2 = img =>{
		setAttributes({ poster2: img.url})
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Additional Settings")} initialOpen={true}>
					{/* For Background Image */}
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Poster Of First Video")}
								type="image"
								value={poster1}
								onSelect={handlePoster1}
								render={({ open }) => (
									<div>
										<img
											src={poster1 ? poster1 : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>
					<PanelRow>
						<fieldset>
							<MediaUpload
								label={__("Poster Of First Video")}
								type="image"
								value={poster2}
								onSelect={handlePoster2}
								render={({ open }) => (
									<div>
										<img
											src={poster2 ? poster2 : defaultImage}
											onClick={open}
											alt={__("Click to Open")}
											style={{ cursor: "pointer" }}
										/>
									</div>
								)}
							/>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				{/* Heading */}
				<RichText
					tagName="h2"
					value={heading}
					onChange={handleHeading}
					placeholder={__("Heading of your section")}
				/>
				<div className="wrapper-testimonail-videos">
					<div className="video-container">
						{/* Videos */}
						<div className="overlay-testimonial">
							<div className="overlay"></div>
							<MediaUpload
								type="video"
								value={video1}
								onSelect={handleVideo1}
								render={({ open }) => (
									<>
										{video1 ? (
											<>
												<video
													src={video1}
													onClick={open}
													alt={__("Click to Open")}
													style={{ cursor: "pointer" }}
													className="first-video"
												/>
											</>
										) : (
											<img src={defaultImage} onClick={open} />
										)}
									</>
								)}
							/>
						</div>
						<MediaUpload
							type="video"
							value={video2}
							onSelect={handleVideo2}
							render={({ open }) => (
								<>
									{video2 ? (
										<>
											<video
												src={video2}
												onClick={open}
												alt={__("Click to Open")}
												style={{ cursor: "pointer" }}
												className="first-video"
											/>
										</>
									) : (
										<img src={defaultImage} onClick={open} />
									)}
								</>
							)}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
