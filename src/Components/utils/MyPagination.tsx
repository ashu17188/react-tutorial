import React from "react";
import { Pagination } from "react-bootstrap";

//https://www.akashmittal.com/pagination-reactjs-bootstrap/

export default function MyPagination({
  children,
  totPages,
  currentPage,
  pageClicked,
}: {
  children: any;
  totPages: number;
  currentPage: number;
  pageClicked: any;
}) {
  const [pageArray, setPageArray] = React.useState([]);

  React.useEffect(() => {
    // let totPages = totPages;
    // let currentPage = currentPage;
    let pageArr: any[] = [];
    if (totPages > 1) {
      if (totPages <= 9) {
        var i = 1;
        while (i <= totPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage <= 5) pageArr = [1, 2, 3, 4, 5, 6, 7, 8, "", totPages];
        else if (totPages - currentPage <= 4)
          pageArr = [
            1,
            "",
            totPages - 7,
            totPages - 6,
            totPages - 5,
            totPages - 4,
            totPages - 3,
            totPages - 2,
            totPages - 1,
            totPages,
          ];
        else
          pageArr = [
            1,
            "",
            currentPage - 3,
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            currentPage + 3,
            "",
            totPages,
          ];
      }
    }
    setPageArray(pageArr as []);
  }, []);

  return (
    <React.Fragment>
      {children}
      <div style={{ marginTop: "15px" }}>
        <Pagination style={{ justifyContent: "center" }}>
          {pageArray.map((ele, ind) => {
            const toReturn = [];

            if (ind === 0) {
              toReturn.push(
                <Pagination.First
                  key={"firstpage"}
                  onClick={
                    currentPage === 1
                      ? () => {}
                      : () => {
                          pageClicked(1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Prev
                  key={"prevpage"}
                  onClick={
                    currentPage === 1
                      ? () => {}
                      : () => {
                          pageClicked(currentPage - 1);
                        }
                  }
                />
              );
            }

            if (ele === "") toReturn.push(<Pagination.Ellipsis key={ind} />);
            else
              toReturn.push(
                <Pagination.Item
                  key={ind}
                  active={currentPage === ele ? true : false}
                  onClick={
                    currentPage === ele
                      ? () => {}
                      : () => {
                          pageClicked(ele);
                        }
                  }
                >
                  {ele}
                </Pagination.Item>
              );

            if (ind === pageArray.length - 1) {
              toReturn.push(
                <Pagination.Next
                  key={"nextpage"}
                  onClick={
                    currentPage === ele
                      ? () => {}
                      : () => {
                          pageClicked(currentPage + 1);
                        }
                  }
                />
              );

              toReturn.push(
                <Pagination.Last
                  key={"lastpage"}
                  onClick={
                    currentPage === ele
                      ? () => {}
                      : () => {
                          pageClicked(ele);
                        }
                  }
                />
              );
            }

            return toReturn;
          })}
        </Pagination>
      </div>
    </React.Fragment>
  );
}
