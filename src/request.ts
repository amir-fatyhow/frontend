interface IObjectKeys {
  [key: string]: string | number;
}

export default class Request {
  constructor() {

  }

  async send(params:IObjectKeys = {}) {
    const query = Object.keys(params)
      .map((key: string) => `${key}=${params[key]}`)
      .join('&');
    const result = await fetch(`http://backendphp?${query}`);
    const answer = await result.json();
    return answer.data;
  }

  getSides(ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number) {
    return this.send({ method: 'getSides', ax: ax, ay: ay, az: az,
      bx: bx, by: by, bz: bz,
      cx: cx, cy: cy, cz: cz})
  }

  getAngles(ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number) {
    return this.send({ method: 'getAngles', ax: ax, ay: ay, az: az,
      bx: bx, by: by, bz: bz,
      cx: cx, cy: cy, cz: cz})
  }

  getSquare(ax: number, ay: number, az: number, bx: number, by: number, bz: number, cx: number, cy: number, cz: number) {
    return this.send({ method: 'getSquare', ax: ax, ay: ay, az: az,
      bx: bx, by: by, bz: bz,
      cx: cx, cy: cy, cz: cz})
  }

  getUsers() {
    return this.send({ method: 'getUsers'});
  }

  postUser(login: string, password: string) {
    return this.send({ method: 'postUser', login: login, password: password});
  }
}
