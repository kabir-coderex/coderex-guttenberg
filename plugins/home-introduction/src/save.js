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
export default function save({attributes}) {
	const {image, heading, subHeading, buttonText, buttonLink} = attributes;
	return (
		<>
			<div {...useBlockProps.save()}>
				<section className="cr-hire pos-relative">
					<div className="hire-illustration-wrapper">
						{image && (
							<img
								width="839"
								height="791"
								src={image}
								className="img-fluid hire-illustration"
								alt="hire image"
							/>
						)}
					</div>

					<div className="cr-container">
						<div className="cr-row">
							<div className="cr-col">
								<div className="hire-content">
									<h2 className="circular-700 color-232 crx">{heading}</h2>
									<div className="crx description">{subHeading}</div>
									<a
										className="cr-btn-default lets-talk-btn svg-btn-effect crx"
										href={buttonLink}
										style={{textDecoration:"none", color:"#00b4ff"}}
									>
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
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
