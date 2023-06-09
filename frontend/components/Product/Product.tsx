'use client';

import { Paper, Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import style from './Product.module.scss';
import { useProduct } from './useProduct';
import { ThemeProvider } from '@/components';

interface ProductProps {
  index: number;
  title: string;
}

export function Product({
  index,
  title,
}: ProductProps) {
  const {
    count,
    isCollapsed,
    handleIncrementCount,
    handleDecrementCount,
    handleChangeCollapseStatus,
  } = useProduct();
  return (
    <ThemeProvider>
      <div className={style.root}>
        <Paper className={style.productCard}>
          <div className={style.productCardTop}>
            <div className={style.productCardInfo}>
              <div>{index}.</div>
              <div>{title}</div>
            </div>
            <div className={style.count}>x{count}</div>
            <Button
              variant='text'
              onClick={handleChangeCollapseStatus}
            >
              {isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
          </div>
          {!isCollapsed && (
            <div className={style.actions}>
              <Button
                color='error'
                variant='contained'
              >
                remove
              </Button>
              <div className={style.actionsRight}>
                <Button
                  className={style.actionButton}
                  variant="outlined"
                  size="small"
                  onClick={handleDecrementCount}
                >
                  -
                </Button>
                <Button
                  className={style.actionButton}
                  variant="outlined"
                  size="small"
                  onClick={handleIncrementCount}
                >
                  +
                </Button>
              </div>
            </div>
          )}
        </Paper>
      </div>
    </ThemeProvider>
  )
}
