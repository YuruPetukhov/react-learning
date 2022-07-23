import React from 'react'
import styles from './avatar.module.css'

export const Avatar = (props) => {
        console.log(props)

        return (
                <div>
                        <img
                                src="https://i.pinimg.com/originals/af/0a/62/af0a621b0d7edbc5ab835144dc0fa4df.gif"
                                className={styles.avatar} />
                        <div>{props.message}</div>

                </div>
        )
}




