class Game {
    constructor(idMay, idChiaBai, idBan, idKetQua, boxKetQuaMay, boxKetQuaBan) {
        this.may = document.getElementById(idMay)
        this.chiaBai = document.getElementById(idChiaBai)
        this.ban = document.getElementById(idBan)
        this.ketQua = document.getElementById(idKetQua)
        this.ketQuaMayb = document.getElementById(boxKetQuaMay)
        this.ketQuaBanb = document.getElementById(boxKetQuaBan)
    }

    coBai() {
        return [2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    
    suKienBamChiaBai() {
        const MAY = []
        const BAN = []
        let strMAY = ''
        let strBAN = ''
        this.chiaBai.onclick = () => {
            this.chiaBai.textContent = 'RESET'
            for (let i = 0; i < 3; i++) {
                MAY.push(Math.floor(Math.random(this.coBai()) * 10))
                BAN.push(Math.floor(Math.random(this.coBai()) * 10))
            }
            const NEW_MAY = []
            const NEW_BAN = []
            for (let i = 0; i < MAY.length; i++) {
                if (MAY[i] == 0) {
                    MAY[i] = 1
                }
                NEW_MAY.push(MAY[i])
            }
            for (let i = 0; i < BAN.length; i++) {
                if (BAN[i] == 0) {
                    BAN[i] = 1
                }
                NEW_BAN.push(BAN[i])
            }
            this.may.innerHTML = `${NEW_MAY[0]} ${NEW_MAY[1]} ${NEW_MAY[2]}`
            this.ban.innerHTML = `${NEW_BAN[0]} ${NEW_BAN[1]} ${NEW_BAN[2]}`

            const ketQuaMay = parseInt(NEW_MAY[0]) + parseInt(NEW_MAY[1]) + parseInt(NEW_MAY[2])
            const ketQuaBan = parseInt(NEW_BAN[0]) + parseInt(NEW_BAN[1]) + parseInt(NEW_BAN[2])
            
            if (ketQuaMay > 20) {
                this.ketQuaMayb.innerHTML = `ket qua= ${ketQuaMay - 20}`
            } else if (ketQuaMay > 10) {
                this.ketQuaMayb.innerHTML = `ket qua= ${ketQuaMay - 10}`
            } else {
                this.ketQuaMayb.innerHTML = `ket qua= ${ketQuaMay}`
            }
            
            if (ketQuaBan > 20) {
                this.ketQuaBanb.innerHTML = `ket qua= ${ketQuaBan - 20}`
            } else if (ketQuaBan > 10) {
                this.ketQuaBanb.innerHTML = `ket qua= ${ketQuaBan - 10}`
            } else {
                this.ketQuaBanb.innerHTML = `ket qua= ${ketQuaBan}`
            }
            
            const ketQuaCuoiCung = ''
            strMAY = this.ketQuaMayb.innerHTML
            strBAN = this.ketQuaBanb.innerHTML
            const intMay = Number(strMAY.slice(strMAY.length - 2, strMAY.length))
            const intBan = Number(strBAN.slice(strBAN.length - 2, strBAN.length))
            
            if (intMay > intBan) {
                this.ketQua.innerHTML = 'Ban thua May'
            } else if (intMay < intBan) {
                this.ketQua.innerHTML = 'Ban thang May'
            } else {
                this.ketQua.innerHTML = 'Ban hoa May'
            }
            if (MAY.length !== 3 || BAN.length !== 3) {
                window.location.reload()
            }
        }
    }

}
const game = new Game('may', 'chiabai', 'ban', 'ketqua', 'ketquamay', 'ketquaban')
game.suKienBamChiaBai()
