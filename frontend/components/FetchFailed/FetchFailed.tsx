import style from './FetchFailed.module.scss';

export function FetchFailed() {
  return (
    <div className={style.root}>
      <div>Oops, something went wrong.</div>
      <div>Check the server status and try to reload page (press f5).</div>
    </div>
  )
}
