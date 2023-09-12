/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { heading, video1, video2, poster1, poster2 } = attributes;
	return (
		<>
			<div {...useBlockProps.save()}>
				<RichText.Content tagName="h2" value={heading} />
				<div className="wrapper-testimonail-videos">
					<div className="video-container">
						{/* Videos */}
						<div className="overlay-testimonial">
							<div className="overlay"></div>
							<video
								controls
								src={video1 ? video1 : ""}
								className="first-video"
							/>
						</div>
						<video controls src={video2 ? video2 : ""} />
					</div>
				</div>
			</div>
		</>
	);
}
