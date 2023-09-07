interface PaginationProps {
  decrease: () => void; 
  increase: () => void; 
  value: number;
}

const Pagination = ({increase, decrease, value}: PaginationProps) => {
  return (
    <div className="join shadow-card">
      <button className="join-item btn focus:outline-none" onClick={decrease} disabled={value === 1}>«</button>
      <button className="join-item btn focus:outline-none">Page {value}</button>
      <button className="join-item btn focus:outline-none" onClick={increase}>»</button>
    </div>
  )
}

export default Pagination;