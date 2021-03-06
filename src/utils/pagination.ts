import { IssueComment, SearchResultItemEdge, PageInfo } from 'types/schema';

interface IData {
  edges: Array<IssueComment | SearchResultItemEdge>;
  pageInfo: PageInfo;
  totalCount?: number;
  issueCount?: number;
}
/**
 * This function is basically merging edges object for pagination
 * @param currentData
 * @param newData
 * @returns {IData}Merged edges data along with pageInfo
 */
export const mergeData = (currentData: IData, newData: IData): IData => ({
  pageInfo: newData.pageInfo,
  edges: currentData ? [...currentData.edges, ...newData.edges] : newData.edges,
  totalCount: newData.totalCount,
  issueCount: newData.issueCount,
});
