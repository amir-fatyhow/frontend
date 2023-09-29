import React, {useRef, useState} from 'react';
import './Points.css';
import Request from "../../request";

const Points = ({request, setSign, user} : {request: Request, setSign: () => void, user: string}) => {
    console.log(user);
    const [error, setError] = useState("");

    const ax = useRef<HTMLInputElement>(null);
    const ay = useRef<HTMLInputElement>(null);
    const az = useRef<HTMLInputElement>(null);

    const bx = useRef<HTMLInputElement>(null);
    const by = useRef<HTMLInputElement>(null);
    const bz = useRef<HTMLInputElement>(null);

    const cx = useRef<HTMLInputElement>(null);
    const cy = useRef<HTMLInputElement>(null);
    const cz = useRef<HTMLInputElement>(null);


    let type = useRef('')
    const [sides, setSides] = useState([]);
    const [angles, setAngles] = useState([]);
    const [square, setSquare] = useState([]);

    function validate([ax, ay, az, bx, by, bz, cx, cy, cz]: number[]) {
        return !(Number.isNaN(ax) ||
                 Number.isNaN(ay) ||
                 Number.isNaN(az) ||
                 Number.isNaN(bx) ||
                 Number.isNaN(by) ||
                 Number.isNaN(bz) ||
                 Number.isNaN(cx) ||
                 Number.isNaN(cy) ||
                 Number.isNaN(cz)
        );
    }

    async function getSides([ax, ay, az, bx, by, bz, cx, cy, cz]: number[]) {
        if(validate([ax, ay, az, bx, by, bz, cx, cy, cz])) {
            const sides = await request.getSides(ax, ay, az, bx, by, bz, cx, cy, cz);
            if (sides['error']) {
                setError(sides['error']);
                return;
            }
            type.current = "sides";
            setSides(sides);
        } else {
            setError('please fill all points');
        }
    }

    async function getAngles([ax, ay, az, bx, by, bz, cx, cy, cz]: number[]) {
        if(validate([ax, ay, az, bx, by, bz, cx, cy, cz])) {
            const angles = await request.getAngles(ax, ay, az, bx, by, bz, cx, cy, cz);
            if (angles['error']) {
                setError(angles['error']);
                return;
            }
            type.current = "angles";
            setAngles(angles);
        } else {
            setError('please fill all points');
        }
    }

    async function getSquare([ax, ay, az, bx, by, bz, cx, cy, cz]: number[]) {
        if(validate([ax, ay, az, bx, by, bz, cx, cy, cz])) {
            const square = await request.getSquare(ax, ay, az, bx, by, bz, cx, cy, cz);
            if (square['error']) {
                setError(square['error']);
                return;
            }
            type.current = "square";
            setSquare(square);
        } else {
            setError('please fill all points');
        }
    }

    function arrPoints() {
        let a_x = ax.current !== null ? parseFloat(ax.current.value) : 0;
        let a_y = ay.current !== null ? parseFloat(ay.current.value) : 0;
        let a_z = az.current !== null ? parseFloat(az.current.value) : 0;

        let b_x = bx.current !== null ? parseFloat(bx.current.value) : 0;
        let b_y = by.current !== null ? parseFloat(by.current.value) : 0;
        let b_z = bz.current !== null ? parseFloat(bz.current.value) : 0;

        let c_x = cx.current !== null ? parseFloat(cx.current.value) : 0;
        let c_y = cy.current !== null ? parseFloat(cy.current.value) : 0;
        let c_z = cz.current !== null ? parseFloat(cz.current.value) : 0;

        return [a_x, a_y, a_z, b_x, b_y, b_z, c_x, c_y, c_z];
    }

    return (
        <div className="box">
            <span className="error-span-points">{error ? error : ""}</span>
            <div className="btn-exit-container">
                <button
                    className="btn-exit"
                    onClick={() => setSign()}
                >
                    <svg width="80px" height="30px" viewBox="0 0 80 30" className="border">
                        <polyline points="79,1 79,29 1,29 1,1 79,1" className="bg-line"/>
                        <polyline points="79,1 79,29 1,29 1,1 79,1" className="hl-line"/>
                    </svg>
                    <span>exit</span>
                </button>
            </div>
            <div className="wrapper">
                <form className="form__contact" action="">
                    <fieldset>
                        <div className="answer" id="answer">
                            <p>Points</p>
                            <p>
                                <label htmlFor="ax" className="form__label">Ax =</label>
                                <input
                                    ref={ax}
                                    type="number"
                                    className="form__field"
                                    id="ax"
                                    tabIndex={1}
                                    contentEditable
                                />
                                <label htmlFor="ay" className="form__label">Ay =</label>
                                <input
                                    ref={ay}
                                    type="number"
                                    className="form__field"
                                    id="ay"
                                    tabIndex={1}
                                    contentEditable
                                />
                                <label htmlFor="az" className="form__label">Az =</label>
                                <input
                                    ref={az}
                                    type="number"
                                    className="form__field"
                                    id="az"
                                    tabIndex={1}
                                    contentEditable
                                />
                            </p>
                            <p>
                                <label htmlFor="bx" className="form__label">Bx =</label>
                                <input
                                    ref={bx}
                                    type="number"
                                    className="form__field"
                                    id="bx"
                                    tabIndex={3}
                                    contentEditable
                                />
                                <label htmlFor="by" className="form__label">By =</label>
                                <input
                                    ref={by}
                                    type="number"
                                    className="form__field"
                                    id="by"
                                    tabIndex={3}
                                    contentEditable
                                />
                                <label htmlFor="bz" className="form__label">Bz =</label>
                                <input
                                    ref={bz}
                                    type="number"
                                    className="form__field"
                                    id="bz"
                                    tabIndex={3}
                                    contentEditable
                                />
                            </p>
                            <p>
                                <label htmlFor="cx" className="form__label">Cx =</label>
                                <input
                                    ref={cx}
                                    type="number"
                                    className="form__field"
                                    id="cx"
                                    tabIndex={5}
                                    contentEditable
                                />
                                <label htmlFor="cy" className="form__label">Cy =</label>
                                <input
                                    ref={cy}
                                    type="number"
                                    className="form__field"
                                    id="cy"
                                    tabIndex={5}
                                    contentEditable
                                />
                                <label htmlFor="cz" className="form__label">Cz =</label>
                                <input
                                    ref={cz}
                                    type="number"
                                    className="form__field"
                                    id="cz"
                                    tabIndex={5}
                                    contentEditable
                                />
                            </p>
                            <p>{type.current === 'sides' ? sides.map(side => <p>
                                a = {side['side_a']};
                                b = {side['side_b']};
                                c = {side['side_c']}
                            </p>) :
                                type.current === 'angles' ? angles.map(side => <p>
                                a = {side['angle1']};
                                b = {side['angle2']};
                                c = {side['angle3']}
                            </p>) :
                                type.current === 'square' ? square.map(side => <p>
                                    square = {side['square']};
                                </p>) :
                                    <p></p>
                            }</p>
                        </div>
                        <div className="btn-container">
                            <button
                                onClick={() => getSides(arrPoints())}
                                type="button"
                                className="button-sides"
                                id="sides"
                                tabIndex={7}
                            ></button>
                            <button
                                onClick={() => getAngles(arrPoints())}
                                type="button"
                                className="button-angles"
                                id="angles"
                                tabIndex={7}
                            ></button>
                            <button
                                onClick={() => getSquare(arrPoints())}
                                type="button"
                                className="button-square"
                                id="square"
                                tabIndex={7}
                            ></button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <svg className="svg-list" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
                  <defs>
                    <filter id="blur0">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0 0"/>
                    </filter>
                      <filter id="blur1">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0 5"/>
                    </filter>
                      <filter id="blur2">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0 10"/>
                    </filter>
                      <filter id="blur3">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0 15"/>
                    </filter>
                      <filter id="blur4">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="0 20"/>
                    </filter>
                  </defs>
            </svg>
            <a>
                <span className="telegram-button"></span>
            </a>
        </div>
    );
};

export default Points;

