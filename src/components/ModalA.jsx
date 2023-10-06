import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import fetchData from "../utils/fetchData";
import filterContact from "../utils/filterContact";
import InfiniteScroll from "./shared/InfinteScroll";
import BaseModal from "./shared/Modal";

const ModalA = () => {
    const {
        data = {},
        hasNextPage,
        fetchNextPage,
        status,
    } = useInfiniteQuery({
        // queryKey: ["contacts"],
        queryFn: ({ pageParam = 1 }) => fetchData({ pageParam, type: "all" }),
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = lastPage.results.length === 20 ? allPages.length + 1 : undefined;
            return nextPage;
        },
    });

    const { even } = useContext(AppContext);

    return (
        <BaseModal title="All Contact">
            <BaseModal title="US Contact">
                {status === "loading" ? (
                    <p>Loading...</p>
                ) : status === "error" ? (
                    <p>Error: {error.message}</p>
                ) : (
                    <InfiniteScroll
                        dataLength={data?.pages?.results?.length}
                        hasMore={hasNextPage}
                        fetchMoreData={fetchNextPage}
                    >
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterContact({ data, even })?.map((contact) => (
                                    <tr>
                                        <th scope="row">{contact.id}</th>
                                        <td>{contact.phone}</td>
                                        <td>{contact.country.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </InfiniteScroll>
                )}
            </BaseModal>
        </BaseModal>
    );
};

export default ModalA;
