
import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { 'Access-Control-Allow-Origin': 'http://localhost:8000',
          'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
        }
      );
      if (resp.status >= 200 && resp.status <= 299) {
        const json = await resp.json()
        return json
      } else {
        throw new Error(`Error: ${resp.status} ${resp.statusText} on ${_url}`)
      }
    },
  });
}

export default function Posts() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(["post", post.id])
                        ? {
                            fontWeight: "bold",
                            color: "green",
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}
