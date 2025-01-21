type Props = {
  params: { category: string; slug: string };
};

const PostDetail = ({ params }: Props) => {
  const { category, slug } = params;
  return (
    <section>
      <div>
        <div>Post Detail</div>
        <div>category : {category}</div>
        <div>slug : {slug}</div>
      </div>
    </section>
  );
};
export default PostDetail;
