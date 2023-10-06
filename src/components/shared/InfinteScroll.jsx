import ReactInfiniteScroll from "react-infinite-scroll-component";

const InfiniteScroll = ({ dataLength, fetchMoreData, hasMore, children }) => {
    return (
        <ReactInfiniteScroll
            dataLength={dataLength | 0}
            next={fetchMoreData}
            style={{ height: "400px" }}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            {children}
        </ReactInfiniteScroll>
    );
};
export default InfiniteScroll;
