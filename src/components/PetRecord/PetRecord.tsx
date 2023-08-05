import React from 'react';
import styles from './PetRecord.module.css';

export interface Props {id:number, petName:string, additionalInfo: string, displayInfo : boolean}

export default function PetRecord(props:Props): JSX.Element {
    const { id, petName, additionalInfo } = props;
    let res : string;
    // eslint-disable-next-line react/destructuring-assignment
    if (props.displayInfo === true) {
        res = ` ID: ${id}
        NAME: ${petName}
        INFO: ${additionalInfo}`;
    } else {
        res = ` ID: ${id} NAME: ${petName}`;
    }
  return (
    <div className={styles.container}>
        <p>{res}</p>
    </div>
  );
}

/* Создайте компонент PetRecord. В качестве параметров компонент
 должен принимать number id, строку petName, строку additionalInfo,
  boolean dysplayInfo.
   Компонент должен отображать на странице полученную информацию в виде блока:
##  ИМЯ
Дополнительная информация
Причем, дополнительная информация должна отображаться, только если dysplayInfo ==true
*/
