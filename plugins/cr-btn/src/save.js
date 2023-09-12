/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

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
	const { buttonText, buttonLink } = attributes;
	return (
		<>
			<span {...useBlockProps.save()}>
				<a href={buttonLink} className="cr-btn-default let-us-talk-btn svg-btn-effect crx">
					<svg>
						<rect
							x="2"
							y="2"
							rx="30"
							fill="none"
							width="98%"
							height="56"
						></rect>
					</svg>
					<span>{buttonText}</span>
				</a>
			</span>
		</>
	);
}
