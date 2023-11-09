/**videoContent
 * {
 * id: string;
 * snippet {
 * publishedAt: string;
 * title: string;
 * }
 * statistics{
 * viewCount: string;
 * }
 * }
 */

export default function PlayListItem({ videoContent }) {
  const { viewCount } = videoContent.statistics;
  const { publishedAt, title } = videoContent.snippet;
  return (
    <>
      <iframe src={`https://www.youtube.com/embed/${videoContent.id}`}></iframe>
    </>
  );
}
