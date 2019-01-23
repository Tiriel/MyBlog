import React from "react";

class StackFlair extends React.Component {
    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        const {
                badge_counts,
                reputation,
                display_name,
                link,
                profile_image
            } = this.props.stack,
            medals = [];
        let i = 0;
        for (const medal in badge_counts) {
            if (
                badge_counts.hasOwnProperty(medal) &&
                badge_counts[medal] !== 0
            ) {
                const part = (() => {
                    return (
                        <span className={medal} key={++i}>
                            <i
                                className="fa fa-circle fa-fw"
                                aria-hidden="true"
                            />{" "}
                            {badge_counts[medal]}
                        </span>
                    );
                })();
                medals.push(part);
            }
            return (
                <a href={link} className="stack">
                    <div className="stack-flair">
                        <img alt="Stack Overflow avatar" src={profile_image} />
                        <span>
                            <i
                                className="fa fa-stack-overflow fa-fw"
                                aria-hidden="true"
                            />{" "}
                            {display_name}
                        </span>
                        <div>
                            <span>{reputation}</span>
                            <span>{medals}</span>
                        </div>
                    </div>
                </a>
            );
        }
    }
}

export default StackFlair;
