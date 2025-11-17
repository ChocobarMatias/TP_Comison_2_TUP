const { pool } = require('./config/dataBase.js'); 

(async () => {
    try {
    const conn = await pool.getConnection();
    conn.release();
    } catch (error) {
        throw error;
    }
})();
