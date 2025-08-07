export const PostInfo = ({ posts }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{posts.title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${posts.email}`}>
          {posts.info}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">{posts.body}</p>
  </div>
);

// </div><>Put the post here</>;
