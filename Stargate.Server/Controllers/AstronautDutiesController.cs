using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Stargate.Server.Business.Data;

namespace Stargate.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AstronautDutiesController : ControllerBase
    {
        private readonly StargateContext _context;

        public AstronautDutiesController(StargateContext context)
        {
            _context = context;
        }

        // GET: api/AstronautDuties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AstronautDuty>>> GetAstronautDuties()
        {
            return await _context.AstronautDuties.ToListAsync();
        }

        // GET: api/AstronautDuties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AstronautDuty>> GetAstronautDuty(int id)
        {
            var astronautDuty = await _context.AstronautDuties.FindAsync(id);

            if (astronautDuty == null)
            {
                return NotFound();
            }

            return astronautDuty;
        }

        [HttpGet("GetAstronautDuties/{personId}")]
        public async Task<ActionResult<IEnumerable<AstronautDuty>>> GetAstronautDuties(int personId)
        {
            return await _context.AstronautDuties.Where(ad => ad.PersonId == personId)
                .OrderByDescending(p => p.DutyStartDate)
                .ToListAsync();
        }

        // PUT: api/AstronautDuties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAstronautDuty(int id, AstronautDuty astronautDuty)
        {
            if (id != astronautDuty.Id)
            {
                return BadRequest();
            }

            _context.Entry(astronautDuty).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AstronautDutyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AstronautDuties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AstronautDuty>> PostAstronautDuty(AstronautDuty astronautDuty)
        {
            _context.AstronautDuties.Add(astronautDuty);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAstronautDuty", new { id = astronautDuty.Id }, astronautDuty);
        }

        // DELETE: api/AstronautDuties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAstronautDuty(int id)
        {
            var astronautDuty = await _context.AstronautDuties.FindAsync(id);
            if (astronautDuty == null)
            {
                return NotFound();
            }

            _context.AstronautDuties.Remove(astronautDuty);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AstronautDutyExists(int id)
        {
            return _context.AstronautDuties.Any(e => e.Id == id);
        }
    }
}
