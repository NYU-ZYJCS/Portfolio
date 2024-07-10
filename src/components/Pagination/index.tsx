import React from 'react';
import styles from './index.module.css'
import LeftArrow from '@/images/logos/left.svg'
import LeftDarkArrow from '@/images/logos/left_dark.svg'
import Image from 'next/image'

interface PaginationProps {
  totalPages: number;
  path: string;
  page: number;
}

const Pagination = ({ totalPages, path, page }: PaginationProps) => {

  if (totalPages === 1) {
    return null;
  }

  const renderLeft = () => (
    <>
      <Image
        src={LeftArrow}
        className='dark:hidden'
        alt={`previous`}
        width={16}
        height={16}
        unoptimized
      />
      <Image
        src={LeftDarkArrow}
        className='hidden dark:block'
        alt={`previous`}
        width={16}
        height={16}
        unoptimized
      />
    </>
  )

  const renderRight = () => (
    <>
      <Image
        src={LeftArrow}
        className='dark:hidden'
        alt={`next`}
        style={{ transform: 'rotate(180deg)' }}
        width={16}
        height={16}
        unoptimized
      />
      <Image
        src={LeftDarkArrow}
        className='hidden dark:block'
        alt={`next`}
        style={{ transform: 'rotate(180deg)' }}
        width={16}
        height={16}
        unoptimized
      />
    </>
  )

  if (page === 1) {
    <div className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <a
          href={path}
          className={`${styles.left} ${styles.disable}`}
        >
          <div className={`${styles.left_arrow} ${styles.arror_disable}`}>
            {renderLeft()}
          </div>
        </a>
        {new Array(totalPages).fill(true).map((_, index) => (
          <a
            key={index}
            href={index === 0 ? path : `${path}/${index + 1}`}
            className={`${styles.paginationItem} ${index + 1 === 1 ? styles.paginationItemActive : ''}`}
          >
            {index + 1}
          </a>
        ))}
        <a
          href={`${path}/2`}
          className={styles.right}
        >
          <div className={styles.right_arrow}>
            {renderRight()}
          </div>
        </a>
      </div>
    </div>
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <a
          href={page === 1 ? path : `${path}/${page - 1}`}
          className={`${styles.left} ${page === 1 ? styles.disable : undefined}`}
        >
          <div className={`${styles.left_arrow} ${page === 1 ? styles.arror_disable : undefined}`}>
            {renderLeft()}
          </div>
        </a>
        {new Array(totalPages).fill(true).map((_, index) => (
          <a
            key={index}
            href={index === 0 ? path : `${path}/${index + 1}`}
            className={`${styles.paginationItem} ${index + 1 === page ? styles.paginationItemActive : ''}`}
          >
            {index + 1}
          </a>
        ))}
        <a
          href={page === totalPages ? path : `${path}/${page + 1}`}
          className={`${styles.right} ${page === totalPages ? styles.disable : undefined}`}
        >
          <div className={`${styles.right_arrow} ${page === totalPages ? styles.arror_disable : undefined}`}>
            {renderRight()}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Pagination;